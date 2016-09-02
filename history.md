stared as angular-cli project: ng new sb
created new github repo "sb"
git remote add origin https://github.com/evandor/sb.git
ng github-pages:deploy --message "testing github pages deploy"

created jenkins build "sb"
npm install
ng build --prod

updating angular-cli: (see https://github.com/angular/angular-cli)

  npm uninstall -g angular-cli
  npm cache clean
  npm install -g angular-cli@latest

and

  rm -rf node_modules dist tmp
  npm install --save-dev angular-cli@latest
  ng init

--- relevant commands ---

ng serve

--- relevant links ---

http://localhost:4200
https://evandor.github.io/sb/   