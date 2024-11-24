
import asyncio
import tornado
import os.path
import uuid

from tornado.options import define, options, parse_command_line
define("debug", default=True, help="run in debug mode")
class MainHandler(tornado.web.RequestHandler):
    def get(self):
        # self.write("Hello, world")
         self.render("indexx.html", title="hory-ai.com")

def make_app():
    # static_path=os.path.join(os.path.dirname(__file__), "static")
    # app = tornado.web.Application(handlers, template_path, static_path, debug=True)   #这里也多了点
    return tornado.web.Application([
        (r"/", MainHandler),
    ],
    cookie_secret="__TODO:_GENERATE_YOUR_OWN_RANDOM_VALUE_HERE__",
        # template_path=os.path.join(os.path.dirname(__file__), "templates"),
        static_path=os.path.join(os.path.dirname(__file__), "static"),
        xsrf_cookies=True,
        debug=options.debug,
    )

async def main():
    
    app = make_app()
    app.listen(89)
    await asyncio.Event().wait()

if __name__ == "__main__":
    asyncio.run(main())