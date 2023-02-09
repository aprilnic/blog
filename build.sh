echo "git release !\n"
git co release 

echo "npx astro build !\n"
npx astro build

echo "copy dist to docs !\n"
cp -R ./dist/* ./docs

echo "push release !\n"
git ac -m 'release' 
git push 
 