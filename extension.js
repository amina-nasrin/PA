const vscode = require('vscode');

import { Uri } from 'vscode';
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Your extension "london" is now active!');

	let disposable = vscode.commands.registerCommand('london.helloWorld', function () {

		vscode.window.showInformationMessage('Hello World from London!', 'y', 'n');
	});

	context.subscriptions.push(disposable);

	let d = vscode.commands.registerCommand('kID', ()=> {
		vscode.window.showInformationMessage('kkk');

        //vscode.Uri.file('/sample');

		//let uri = 
		Uri.file('/Users/amina/');
		//open.name(uri);
		//assert.ok(uri.path === '/Users/amina/');
		vscode.window.createOutputChannel('/Users/amina/');

		//		document.getElementById("replay").click();
	
	});

	context.subscriptions.push(d);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
