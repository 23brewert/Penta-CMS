export default function ({ $auth ,store, redirect }) {
    // If the user is not authenticated
    if (!$auth.user) {
      return redirect('/login')
    }else{
        if ($auth.user.first_name && $auth.user.last_name){
            return redirect('/account/finish')
        }
    }
  }