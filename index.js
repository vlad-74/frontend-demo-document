let str = `
/*------------------------------------------------------------------------------------*/
Download and install Node.js
<ОТКРЫТЬ> cmd
npm -g install yuidocjs
cd <ПАПКА ПРОЕКТА> (верхняя часть исходного дерева JS)
yuidoc .
<В ПАПКЕ ПРОЕКТА СОЗДАСТЬСЯ ПАПКА out В КОТОРОЙ БУДЕТ index.html - ИНФОРМАЦИЯ О ПРОЕКТЕ>
/*------------------------------------------------------------------------------------*/

http://yui.github.io/yuidoc/syntax/index.html

Example Class Block

/**
* This is the description for my class.
*
* @class MyClass
* @constructor
*/
Example Method Block

/**
* My method description.  Like other pieces of your comment blocks, 
* this can span multiple lines.
*
* @method methodName
* @param {String} foo Argument 1
* @param {Object} config A config object
* @param {String} config.name The name on the config object
* @param {Function} config.callback A callback function on the config object
* @param {Boolean} [extra=false] Do extra, optional work
* @return {Boolean} Returns true on success
*/
Example Property Block

/**
* My property description.  Like other pieces of your comment blocks, 
* this can span multiple lines.
* 
* @property propertyName
* @type {Object}
* @default "foo"
*/
`
console.log(str);