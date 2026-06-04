import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const emailError = getEmailError(email);
  const passwordError = getPasswordError(password);
  const showEmailError = submitted && Boolean(emailError);
  const showPasswordError = submitted && Boolean(passwordError);

  function handleLogin() {
    setSubmitted(true);

    if (emailError || passwordError) {
      return;
    }

    Alert.alert("로그인 성공", `${email.trim()}님 환영합니다!`);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardArea}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Text style={styles.eyebrow}>Welcome back</Text>
            <Text style={styles.title}>로그인</Text>
            <Text style={styles.subtitle}>
              이메일과 비밀번호로 계정에 접속하세요.
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.field}>
              <Text style={styles.label}>이메일</Text>
              <TextInput
                style={[styles.input, showEmailError && styles.inputError]}
                placeholder="name@example.com"
                placeholderTextColor="#8A94A6"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                textContentType="emailAddress"
                inputMode="email"
                returnKeyType="next"
                accessibilityLabel="이메일"
              />
              {showEmailError && (
                <Text style={styles.errorText}>{emailError}</Text>
              )}
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>비밀번호</Text>
              <TextInput
                style={[styles.input, showPasswordError && styles.inputError]}
                placeholder="8자 이상 입력"
                placeholderTextColor="#8A94A6"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
                autoComplete="password"
                textContentType="password"
                returnKeyType="done"
                accessibilityLabel="비밀번호"
              />
              {showPasswordError && (
                <Text style={styles.errorText}>{passwordError}</Text>
              )}
            </View>

            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>로그인</Text>
            </Pressable>
          </View>

          <Pressable style={({ pressed }) => pressed && styles.linkPressed}>
            <Text style={styles.signupText}>
              아직 계정이 없나요? <Text style={styles.signupLink}>회원가입</Text>
            </Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function getEmailError(value: string) {
  const email = value.trim();

  if (!email) {
    return "이메일을 입력해주세요.";
  }

  if (!EMAIL_PATTERN.test(email)) {
    return "올바른 이메일 형식으로 입력해주세요.";
  }

  return "";
}

function getPasswordError(value: string) {
  if (!value) {
    return "비밀번호를 입력해주세요.";
  }

  if (value.length < MIN_PASSWORD_LENGTH) {
    return `비밀번호는 ${MIN_PASSWORD_LENGTH}자 이상이어야 합니다.`;
  }

  return "";
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FB",
  },
  keyboardArea: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  header: {
    marginBottom: 28,
  },
  eyebrow: {
    color: "#2563EB",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0,
    marginBottom: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#121826",
    marginBottom: 8,
  },
  subtitle: {
    color: "#5C667A",
    fontSize: 16,
    lineHeight: 23,
  },
  form: {
    gap: 18,
  },
  field: {
    gap: 8,
  },
  label: {
    color: "#2C3443",
    fontSize: 14,
    fontWeight: "700",
  },
  input: {
    minHeight: 54,
    borderWidth: 1,
    borderColor: "#D6DBE6",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#121826",
    backgroundColor: "#FFFFFF",
  },
  inputError: {
    borderColor: "#DC2626",
    backgroundColor: "#FFF7F7",
  },
  errorText: {
    color: "#B91C1C",
    fontSize: 13,
    lineHeight: 18,
  },
  button: {
    height: 54,
    backgroundColor: "#2563EB",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  buttonPressed: {
    opacity: 0.82,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "700",
  },
  signupText: {
    textAlign: "center",
    marginTop: 24,
    color: "#5C667A",
    fontSize: 14,
  },
  signupLink: {
    color: "#2563EB",
    fontWeight: "700",
  },
  linkPressed: {
    opacity: 0.7,
  },
});
