const express = require('express')

const app = express()

app.get('/home', loadstdHtml);
app.get('/Admin', adminlogin);
app.get('/AdminHome', AdminsHome);
app.get('/userlogin',userlogins);
app.get('/userreg',userregs);
app.get('/userHome', usersHome);
app.get('/forgotPassword', forgotPassword);
app.get('/adminforgotPassword', adminforgotPassword);


app.get('/user/Viewcomments',Viewcomments);
app.get('/user/ViewTopics',viewtopics);
app.get('/user/profile',viewprofile);
app.get('/user/ViewAllUsers',ViewAllUsers);
app.get('/user/ViewChat',Viewchats);
app.get('/user/userChangePassword',userChangePassword);

app.get('/admin/Addtopic',addtopics);
app.get('/admin/Viewuser',viewusers);
app.get('/admin/adminViewtopic',AdminviewTopics);
app.get('/admin/adminViewcom',Adminviewcoments);
app.get('/admin/adminChangePassword',adminChangePassword);


app.listen(3000, () => console.log(`Example app listening on port 3000!`))

function loadstdHtml(req, res) {
    
    res.sendFile('MainPage.html',{ root: __dirname });

}

function adminlogin(req, res) {
   // res.header("Control-Access-Allow-Origin","*")
    res.sendFile('AdminLogin.html',{ root: __dirname });

}
function forgotPassword(req, res) {
    // res.header("Control-Access-Allow-Origin","*")
    res.sendFile('ForgotPassword.html',{ root: __dirname });
}
function adminforgotPassword(req, res) {
    // res.header("Control-Access-Allow-Origin","*")
    res.sendFile('AdminForgotPassword.html',{ root: __dirname });
}
function userlogins(req, res) {
    
    res.sendFile('UserLogin.html',{ root: __dirname });

}
function AdminsHome(req, res) {
    
    res.sendFile('Admin/AdminMainPage.html',{ root: __dirname });

}

function usersHome(req, res) {
    
    res.sendFile('User/UserMainPage.html',{ root: __dirname });

}
function userregs(req, res) {
    
    res.sendFile('UserReg.html',{ root: __dirname });

}
//User

function viewprofile (req, res) {
    
    res.sendFile('User/ViewProfile.html',{ root: __dirname });

}
function viewtopics (req, res) {
    
    res.sendFile('User/viewtopics.html',{ root: __dirname });

}
function Viewcomments (req, res) {
    
    res.sendFile('User/ViewComments.html',{ root: __dirname });

}

function ViewAllUsers(req, res) {
    
    res.sendFile('User/ViewUsers.html',{ root: __dirname });

}
function Viewchats(req, res) {
    
    res.sendFile('User/Viewchat.html',{ root: __dirname });

}
function userChangePassword (req, res) {
    
    res.sendFile('User/ChangePassword.html',{ root: __dirname });

}


//Admin


function addtopics(req, res) {
    
    res.sendFile('Admin/UploadTopics.html',{ root: __dirname });

}
function viewusers(req, res) {
    
    res.sendFile('Admin/ViewUsers.html',{ root: __dirname });

}
function AdminviewTopics(req, res) {
    
    res.sendFile('Admin/ViewTopics.html',{ root: __dirname });

}
function Adminviewcoments(req, res) {
    
    res.sendFile('Admin/ViewComments.html',{ root: __dirname });

}
function adminChangePassword(req, res) {
    
    res.sendFile('Admin/ChangePassword.html',{ root: __dirname });

}
