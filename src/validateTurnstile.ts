const SECRET_KEY = '0x4AAAAAACmYL11oGI4_tJ96c71skZak5Fo';

async function validateTurnstile(token: string, remoteip: string): Promise<{ success: boolean; 'error-codes'?: string[] }> {
  const formData = new FormData();
  formData.append('secret', SECRET_KEY);
  formData.append('response', token);
  formData.append('remoteip', remoteip);

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    return result as any;
  } catch (error) {
    console.error('Turnstile validation error:', error);
    return { success: false, 'error-codes': ['internal-error'] };
  }
}

export { validateTurnstile };
