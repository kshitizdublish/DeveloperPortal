/*****************************************************************
* Proprietary & Confidential | © 2017 PhaseZero Ventures LLC *
* This is part of PhaseZero Ventures LLC and cannot be copied, *
* modified and/or distributed without the express permission of *
* PhaseZero Ventures LLC *
*****************************************************************/
/**
* @author: Kshitiz Dublish
*/

# PzvDeveloper

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

#### IDE

Any Text Editor would work fine, like [Sublime](https://www.sublimetext.com/) or [Webstorm](https://www.jetbrains.com/webstorm/download/)
Suggested & I am using it [Visual Studio Code](https://code.visualstudio.com/)

#### Dependencies

1. [NodeJs](https://nodejs.org/en/)
2. [AngularJs](https://cli.angular.io/) And [Angular CLI](https://cli.angular.io/)

#### Getting Started

Copy this repo to your local repo by
1. > `git clone repo_path` 
2. > `cd pzv-developer` 
3. > `npm install` 
4. > `ng serve` 
5. > goto browser and run `http://localhost:4200/`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### how to Create Component 
1. > Run `ng generate component example-comp` this will create new component at `src/app/example-comp`
2. > If required to create new component under `example-comp` than run command like this `ng generate component example-comp/sub-example-comp` 
3. > Or shortcuts like `ng g c example-comp` 

#### Locale Language Help, how to use it.
* > locale can be located at root folder/src/locale/i18n/
* > As of now 2 languages are supported English(en_US) & Chinese(zh)

#### how to use in HTML template 
```
<button type="submit"> {{ 'Login.loginBtn' | translate }} </button>
```
#### How to use in type script
```
this.translate.get('Login.invalidEmail').subscribe((res: string) => { 
          this.loginErrorMsg = res; 
        });
```
#### How to change Language Event
```
// pass lang = en_US || zh
this._customEvents.langChangeEvt.emit({lang:'zh'});
```
#### How to configure `Environment path` and `Location`
1. Under `src/enviroments` folder 
2. default is enviroment.ts, which is dev

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Updating Angular CLI

Update Package Level CLI
```
npm uninstall --save-dev angular-cli
npm install --save-dev @angular/cli@latest
npm install
```

### Thumb rule
Before making push please run this command
```
ng lint --type-check
```

#### Modules Update
Every time module is added or deleted must restart ng serve
#### Tech-Stack
* > Angularjs 5.2.5. [Docs](https://angular.io/docs)
* > Bootstrap 3.3.7. Bootstrap 3 help guide at [BS3](https://www.w3schools.com/bootstrap/default.asp)
* > Fontawesome 4.7.0. For using icons we have [Font Awesom](http://fontawesome.io/icons/)
Icons like, `assets/images/logo.png etc`
How to use and sample can be seen [Here](http://fontawesome.io/examples/)
* > SASS/ CSS3. For css & stlye we are using `SASS`. Some basics of [SASS](http://sass-lang.com/guide)
While creating new component `ng generate component component-name`, default style type is `.scss`.
While using SASS, need to use `./common/_variables.scss`
These files will hold some common color codes and style guide.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
