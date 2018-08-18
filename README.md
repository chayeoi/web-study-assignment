# web-study-assignment

## 과제 제출

1. https://github.com/chayeoi/web-study-assignment을 본인의 github 계정으로 fork합니다.

![submit-assignment-1](./assets/submit-assignment-1.png)

2. fork한 repository의 URL을 복사합니다.(주의! 원본 repository가 아닌 방금 fork한 repository의 URL을 복사해야 합니다!)

![submit-assignment-2](./assets/submit-assignment-2.png)

3. 터미널을 실행한 후, 방금 복사한 URL을 붙여넣어 로컬로 clone합니다.

```bash
git clone [복사한 URL]
```

![submit-assignment-3](./assets/submit-assignment-3.png)

4. 터미널에서 clone한 repository로 이동한 후, [원본 repository](https://github.com/chayeoi/web-study-assignment)를 upstream이라는 별칭으로 추가합니다.

```bash
cd web-study-assignment
git remote add upstream https://github.com/chayeoi/web-study-assignment.git
```

5. 로컬 repository에 자신의 영문 이름으로 폴더를 생성합니다.
6. 해당 폴더 안에 과제를 업로드한 후 add, commit합니다.
7. 본인의 원격 respository로 push합니다.

```bash
git push origin master
```

7. 본인의 원격 repository로 접속한 다음 pull request를 생성합니다.

## 과제 동기화

clone한 로컬 repository에서 다음 명령을 실행하면 동기화할 수 있습니다.

```bash
git pull upstream master
```