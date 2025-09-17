# Ветки

git switch -c feature/x # создать и перейти
git switch main # вернуться
git branch -d feature/x # удалить

# Merge / Rebase

git merge --no-ff feature/x
git rebase main
git rebase -i HEAD~N

# Конфликты

git status

# правка файлов...

git add <files>
git merge --continue

# Stash

git stash push -m "msg"
git stash list
git stash pop

# История

git log --oneline --decorate --graph --all
git show <hash>
git diff <range> -- <path>
