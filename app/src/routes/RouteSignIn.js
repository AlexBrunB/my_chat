import Route from './Route';

@Route.Route({
    routeBase: '',
})
export default class RoutSignIn extends Route {
    constructor(params) {
        super({ ...params});
    }

    // http://localhost:3000/signin/
    @Route.Get({ path: '/signin'})
    signin(ctx) {
        this.sendOk(ctx, {
            msg: "SignIn"
        });
    }
}