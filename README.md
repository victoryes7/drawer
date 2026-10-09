# 서랍

나만 쓰는 메모 서랍. 앱 화면은 GitHub Pages(이 저장소)에서 열리고, 메모와 첨부 파일은 비공개 저장소 `drawer-data`에 저장된다.

## 처음 설치

### 1. 앱 저장소 만들기 (공개)
1. https://github.com/new 에서 이름 `drawer`, **Public**으로 만든다.
2. 만든 저장소 첫 화면에서 **uploading an existing file**을 누르고, 이 폴더의 파일을 전부 끌어다 놓는다.
   `index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`, `README.md`
3. **Commit changes**를 누른다.

### 2. GitHub Pages 켜기
1. `drawer` 저장소 → **Settings** → **Pages**.
2. Source: **Deploy from a branch**, Branch: **main** / **(root)** → **Save**.
3. 1-2분 뒤 `https://아이디.github.io/drawer/` 로 열린다.

### 3. 데이터 저장소 만들기 (비공개)
https://github.com/new 에서 이름 `drawer-data`, **Private**으로 만든다. 다른 설정은 건드리지 않는다.

### 4. 토큰 만들기
1. https://github.com/settings/personal-access-tokens/new
2. Token name: `서랍`
3. Expiration: 가장 긴 기간 (No expiration이 보이면 그것)
4. Repository access: **Only select repositories** → `drawer-data`
5. Permissions → Repository permissions → **Contents: Read and write**
6. **Generate token** → 나온 토큰(`github_pat_…`)을 복사한다. 이 화면을 벗어나면 다시 볼 수 없다.

### 5. 첫 기기 연결
`https://아이디.github.io/drawer/` 를 열고 아이디, `drawer-data`, 토큰을 넣고 **연결**.

### 6. 나머지 기기 연결
- 첫 기기에서 설정(오른쪽 위 슬라이더 아이콘) → **설정 코드 복사**.
- 다른 기기 첫 화면의 설정 코드 칸에 붙여넣고 **코드로 연결**.
- 설정 코드에는 토큰이 들어 있다. 옮긴 뒤 메모 앱 등에 남은 코드는 지운다.

## 앱처럼 쓰기
- **iPhone · iPad**: Safari로 열기 → 공유 → **홈 화면에 추가** → 홈 화면 아이콘으로 열고 그 안에서 설정 코드로 연결한다. 홈 화면 앱은 Safari와 저장 공간이 따로라서 앱 안에서 한 번 더 연결해야 한다.
- **Galaxy**: Chrome으로 열기 → 메뉴 → **앱 설치** 또는 **홈 화면에 추가**. 아이콘을 길게 누르면 새 메모·고정 메모 바로가기가 뜬다.
- **Mac**: Safari로 열기 → 파일 → **Dock에 추가**. Dock 앱 안에서 설정 코드로 연결한다.

## 바로가기 주소
- `…/drawer/#new` 새 메모 창이 바로 열린다.
- `…/drawer/#pinned` 고정 메모만 보인다.
- iPhone 단축어의 "URL 열기"는 Safari로 열린다. 단축어를 쓸 거라면 Safari에서도 한 번 연결해 둔다.

## 문제가 생기면
- **토큰이 만료됐거나 잘못됐어요**: 4번으로 새 토큰을 만들고, 한 기기에서 설정 → 연결 해제 → 다시 연결 → 새 설정 코드로 나머지 기기를 다시 연결한다.
- **기기를 잃어버렸을 때**: https://github.com/settings/personal-access-tokens 에서 `서랍` 토큰을 삭제하고 새로 만든다.
- 모든 저장·삭제는 `drawer-data` 저장소의 커밋 기록으로 남는다. 실수로 지운 메모도 커밋 기록에서 되살릴 수 있다.

## 앱 업데이트
고친 `index.html` 등을 `drawer` 저장소에 같은 이름으로 다시 올리면 된다 (Add file → Upload files). 메모 데이터는 영향을 받지 않는다.
