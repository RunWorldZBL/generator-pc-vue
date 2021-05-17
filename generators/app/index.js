"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // 问候用户
    this.log(
      yosay(
        `Welcome to the luminous ${chalk.red(
          "generator-imooc-glup"
        )} generator!`
      )
    );
    const prompts = [
      {
        type: "input",
        name: "name",
        message: "请输入你的项目名字：",
        default: "vue"
      },
      {
        type: "input",
        name: "description",
        message: "请输入项目描述：",
        default: "a simple description"
      },
      {
        type: "input",
        name: "author",
        message: "请输入项目作者：",
        default: "zws-matchless"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    /*
     **的意思是将template文件夹中的所有文件都复制到新的项目中
     */
    this.fs.copy(this.templatePath("**"), this.destinationPath("./"));
    const specFileList = [".browserslistrc"];
    specFileList.forEach(file => {
      this.fs.copy(this.templatePath(file), this.destinationPath(file));
    });

    // 将用户信息保存到 package.json 里
    this.initPackage();
  }

  initPackage() {
    let pkg = this.fs.readJSON(this.templatePath("./package.json"), {});
    const { props } = this;

    Object.assign(pkg, {
      name: props.name,
      description: props.description
    });
    this.fs.extendJSON(this.destinationPath("./package.json"), pkg);
  }
};
