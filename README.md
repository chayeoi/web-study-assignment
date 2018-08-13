# web-study-assignment

## 과제 제출

1. https://github.com/chayeoi/web-study-assignment을 본인의 github 계정으로 fork합니다.
2. fork한 repository를 로컬로 clone합니다.
3. 터미널에서 clone한 repository로 이동한 다음, 아래 명령을 실행하세요.

```bash
git remote add upstream https://github.com/chayeoi/web-study-assignment.git
```

4. 로컬 repository에 자신의 영문 이름으로 폴더를 생성합니다.
5. 해당 폴더 안에 과제를 업로드한 후 add, commit합니다.
6. 본인의 원격 respository로 push합니다.

```bash
git push origin master
```

7. 본인의 원격 repository로 접속한 다음 pull request를 생성합니다.

## 과제 동기화

clone한 로컬 repository에서 다음 명령을 실행하면 동기화할 수 있습니다.

```bash
git pull upstream master
```