const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export function getEmailError(value: string) {
  const email = value.trim();

  if (!email) {
    return "이메일을 입력해주세요.";
  }

  if (!EMAIL_PATTERN.test(email)) {
    return "올바른 이메일 형식으로 입력해주세요.";
  }

  return "";
}

export function getPasswordError(value: string) {
  if (!value) {
    return "비밀번호를 입력해주세요.";
  }

  if (value.length < MIN_PASSWORD_LENGTH) {
    return `비밀번호는 ${MIN_PASSWORD_LENGTH}자 이상이어야 합니다.`;
  }

  return "";
}

export function getConfirmPasswordError(
  password: string,
  confirmPassword: string,
) {
  if (!confirmPassword) {
    return "비밀번호를 한 번 더 입력해주세요.";
  }

  if (password !== confirmPassword) {
    return "비밀번호가 서로 일치하지 않습니다.";
  }

  return "";
}
