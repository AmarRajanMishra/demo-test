let data = document.getElementById('para')
// console.log(data)
data.innerHTML = `echo "# demo-test" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/AmarRajanMishra/demo-test.git
git push -u origin main`