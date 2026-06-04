import { useState } from "react";
import { router } from "expo-router";
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

import { getEmailError, getPasswordError } from "@/utils/auth-validation";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [focusedField, setFocusedField] = useState<"email" | "password" | null>(
    null,
  );
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const emailError = getEmailError(email);
  const passwordError = getPasswordError(password);
  const showEmailError = (submitted || emailTouched) && Boolean(emailError);
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
            <View style={styles.logoMark}>
              <Text style={styles.logoText}>L</Text>
            </View>
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
                style={[
                  styles.input,
                  focusedField === "email" && styles.inputFocused,
                  showEmailError && styles.inputError,
                ]}
                placeholder="name@example.com"
                placeholderTextColor="#8A94A6"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setFocusedField("email")}
                onBlur={() => {
                  setFocusedField(null);
                  setEmailTouched(true);
                }}
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
              <View
                style={[
                  styles.passwordInputWrap,
                  focusedField === "password" && styles.inputFocused,
                  showPasswordError && styles.inputError,
                ]}
              >
                <TextInput
                  style={styles.passwordInput}
                  placeholder="8자 이상 입력"
                  placeholderTextColor="#8A94A6"
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  secureTextEntry={!isPasswordVisible}
                  autoCapitalize="none"
                  autoComplete="password"
                  textContentType="password"
                  returnKeyType="done"
                  accessibilityLabel="비밀번호"
                />
                <Pressable
                  style={({ pressed }) => [
                    styles.passwordToggle,
                    pressed && styles.linkPressed,
                  ]}
                  onPress={() => setIsPasswordVisible((current) => !current)}
                  accessibilityRole="button"
                  accessibilityLabel={
                    isPasswordVisible ? "비밀번호 숨기기" : "비밀번호 보기"
                  }
                >
                  <Text style={styles.passwordToggleText}>
                    {isPasswordVisible ? "숨기기" : "보기"}
                  </Text>
                </Pressable>
              </View>
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

          <Pressable
            style={({ pressed }) => pressed && styles.linkPressed}
            onPress={() => router.push("/signup")}
            accessibilityRole="button"
          >
            <Text style={styles.signupText}>
              아직 계정이 없나요? <Text style={styles.signupLink}>회원가입</Text>
            </Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
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
    alignItems: "flex-start",
  },
  logoMark: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
  logoText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
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
    padding: 22,
    borderWidth: 1,
    borderColor: "#E2E7F0",
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    gap: 18,
    shadowColor: "#101828",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 4,
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
  inputFocused: {
    borderColor: "#2563EB",
  },
  inputError: {
    borderColor: "#DC2626",
    backgroundColor: "#FFF7F7",
  },
  passwordInputWrap: {
    minHeight: 54,
    borderWidth: 1,
    borderColor: "#D6DBE6",
    borderRadius: 12,
    paddingLeft: 16,
    paddingRight: 8,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    minHeight: 52,
    fontSize: 16,
    color: "#121826",
    paddingVertical: 0,
  },
  passwordToggle: {
    minWidth: 56,
    minHeight: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  passwordToggleText: {
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "700",
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
