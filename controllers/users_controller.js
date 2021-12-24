const User=require('../models/user');
module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('profile');
    }


    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })
}

module.exports.Profile = function(req, res){
    return res.render('profile', {
        title: 'User Profile'
    })
}
// render the sign in page
module.exports.signIn = function(req, res){
    
   if (req.isAuthenticated()){
        return res.redirect('profile');
   }
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}
module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
    if(err){console.log('error in finding the user',err);
         return;
     }
    if(!user){
        User.create(req.body,function(err,user){
            if(err){
                console.log('error in craeting user');
            }
            else{
                console.group('user craeted successfully')
            return res.redirect('/users/sign-in');
            }
      }) 
    }else{
        return res.redirect('back');
    }

    });


}
module.exports.createSession = function(req, res){

    // steps to authenticate
    // find the user
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing in'); return}
        // handle user found
        if (user){

            // handle password which doesn't match
            if (user.password != req.body.password){
                return res.redirect('back');
            }

            // handle session creation
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile');

        }else{
            // handle user not found

            return res.redirect('back');
        }


    });

 

    

    
}

module.exports.destroySession = function(req, res){
    req.logout();

    return res.redirect('/');
}
