function generateOTP(otpLength = 6) {
  const digits = '0123456789';
  let otp = '';
  for (let index = 0; index < otpLength; index++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}



function generateOTPSecure(otpLength = 6, charSet = '0123456789') {
  if (otpLength < 1 || !Number.isInteger(otpLength)) {
    throw new Error('Invalid OTP length');
  }
  const charSetSize = charSet.length;
  if (charSetSize < 2) {
    throw new Error('Character set must contain at least two characters');
  }

  const randomBytes = new Uint8Array(otpLength);
  window.crypto.getRandomValues(randomBytes);

  let otp = '';
  for (let i = 0; i < otpLength; i++) {
    const randomIndex = randomBytes[i] % charSetSize;
    otp += charSet[randomIndex];
  }

  return { otp, generatedAt: new Date(), expiresAt: new Date(Date.now() + 5 * 60 * 1000) };
}
