import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
 
export default authMiddleware({
    publicRoutes:['/'],
    afterAuth(auth, req, evt) {
        // Handle users who aren't authenticated
        if (!auth.userId && !auth.isPublicRoute) {
            return NextResponse.redirect(new URL('/lmao',req.url))
          }
        // Redirect logged in users to organization selection page if they are not active in an organization
       
        // If the user is logged in and trying to access a protected route, allow them to access route
        if (auth.userId && !auth.isPublicRoute) {
          return NextResponse.redirect(new URL('/lmao',req.url))
          }
          if (auth.userId && req.url==='/'){
            return NextResponse.redirect(new URL('/test',req.url))
          }
        // Allow users visiting public routes to access them
        
      },
      debug:true,
});
 
export const config = {
    matcher: []
};