/* web server */
import express      from "express";

/* middleware */
import helmet       from "helmet";        // security
import morgan       from "morgan";        // logger
import cookieParser from "cookie-parser"; // cookie parser
import bodyParser   from "body-parser";   // body parser

/* url router */
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter   from "./routers/userRouter";
import videoRouter  from "./routers/videoRouter";

/* create web server */
const app = express();

/* attach middleware */
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* attach view engine */
app.set('view engine', 'pug');

/* attach routers */
/* req -> url -> router -> controller -> data -> res */
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

/* export server */
export default app;