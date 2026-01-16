/**
 * Copy text to clipboard with fallback for non-secure contexts
 * @param {string} text - Text to copy
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export const copyToClipboard = async (text) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return { success: true };
    } else {
      // Fallback for non-secure contexts
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-999999px';
      textarea.style.top = '-999999px';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      
      try {
        const successful = document.execCommand('copy');
        document.body.removeChild(textarea);
        return successful ? { success: true } : { success: false, error: 'Copy command failed' };
      } catch (err) {
        document.body.removeChild(textarea);
        throw err;
      }
    }
  } catch (err) {
    console.error('Failed to copy:', err);
    return { success: false, error: err.message };
  }
};
