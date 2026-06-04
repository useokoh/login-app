# login-app 명령어 정리

이 문서는 MacBook 개발환경 세팅과 React Native + Expo 앱 실행에 필요한 명령어를 정리한 파일이다.

---

## 1. 프로젝트 폴더 이동

```bash
cd ~/Developer/login-app
```

---

## 2. Expo 앱 실행

기본 실행:

```bash
npx expo start
```

캐시 삭제 후 실행:

```bash
npx expo start -c
```

로컬 연결로 실행:

```bash
npx expo start --localhost
```

로컬 연결 + 캐시 삭제:

```bash
npx expo start --localhost -c
```

네트워크 연결이 꼬였을 때 터널 모드 실행:

```bash
npx expo start --tunnel -c
```

---

## 3. iPhone Simulator 실행

Simulator 직접 열기:

```bash
open -a Simulator
```

Expo 실행 중 iPhone Simulator로 앱 열기:

```text
i
```

Simulator에 켜진 기기 확인:

```bash
xcrun simctl list devices booted
```

Simulator 전체 종료:

```bash
xcrun simctl shutdown all
killall Simulator
```

Expo Go 앱만 종료:

```bash
xcrun simctl terminate booted host.exp.Exponent
```

---

## 4. Expo 연결 문제 해결

Expo 로컬 상태 삭제:

```bash
rm -rf .expo
```

Expo 서버 종료:

```text
control + c
```

다시 실행:

```bash
npx expo start -c
```

---

## 5. Xcode 확인 명령어

Xcode 버전 확인:

```bash
xcodebuild -version
```

Xcode 개발자 경로 확인:

```bash
xcode-select -p
```

Xcode 개발자 경로 지정:

```bash
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

Xcode 약관 동의:

```bash
sudo xcodebuild -license accept
```

Xcode 첫 실행 설정:

```bash
sudo xcodebuild -runFirstLaunch
```

Simulator 명령어 확인:

```bash
xcrun simctl help
```

---

## 6. Homebrew 확인

Homebrew 버전 확인:

```bash
brew --version
```

Homebrew 상태 확인:

```bash
brew doctor
```

Homebrew 업데이트:

```bash
brew update
```

---

## 7. Git 명령어

현재 Git 상태 확인:

```bash
git status
```

변경된 파일 전체 추가:

```bash
git add .
```

커밋 만들기:

```bash
git commit -m "Create login screen"
```

커밋 기록 확인:

```bash
git log --oneline
```

---

## 8. GitHub CLI 명령어

GitHub 로그인:

```bash
gh auth login
```

GitHub 로그인 상태 확인:

```bash
gh auth status
```

---

## 9. VS Code / Cursor 열기

현재 프로젝트를 VS Code로 열기:

```bash
code .
```

현재 프로젝트를 Cursor로 열기:

```bash
cursor .
```

---

## 10. Node.js 확인

Node.js 버전 확인:

```bash
node -v
```

npm 버전 확인:

```bash
npm -v
```

---

## 11. TypeScript 검사

문법 오류 확인:

```bash
npx tsc --noEmit
```

---

## 12. Codex 실행/종료

프로젝트 폴더에서 Codex 실행:

```bash
codex
```

Codex 종료:

```text
/quit
```

또는

```text
/exit
```

강제 종료:

```text
control + c
```

---

## 13. Codex에게 줄 기본 지시문

```text
한국어로 답해줘.
나는 터미널 명령어에 익숙하지 않은 초보자야.
내 허락 없이 파일을 수정하지 마.
먼저 어떤 파일을 왜 수정할지 설명만 해줘.
명령어는 한 번에 너무 많이 주지 말고 단계별로 알려줘.
```

---

## 14. 현재 프로젝트 정보

- 프로젝트 이름: login-app
- 프로젝트 위치: `~/Developer/login-app`
- 프레임워크: React Native + Expo
- 실행 목표: iPhone Simulator에서 로그인 화면 앱 실행
- 로그인 화면 파일: `src/app/index.tsx`
- 명령어 정리 파일: `COMMANDS.md`
