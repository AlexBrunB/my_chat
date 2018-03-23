import Route from './Route';

@Route.Route({
    routeBase: '',
})
export default class RouteSignUp extends Route {
    constructor(params) {
        super({ ...params});
    }

    // http://localhost:3000/signup/
    @Route.Post({
         path: '/signup',
         params: {
             email: true,
             password: false,
         },
    })
    async signup(ctx) {
        const body = this.body(ctx);
        this.sendOk(ctx, {
            msg: "SignUp",
            email: body.email,
            password : body.password
        });
    }
}