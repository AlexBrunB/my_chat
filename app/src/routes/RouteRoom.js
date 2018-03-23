import Route from './Route';

@Route.Route({
    routeBase: '',
})
export default class RouteRoom extends Route {
    constructor(params) {
        super({ ...params});
    }

    // http://localhost:3000/room/
    @Route.Get({ path: '/room'})
    room(ctx) {
        this.sendOk(ctx, {
            msg: "Room"
        });
    }
}