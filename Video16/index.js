//Function Component
function Header() {
    return (
        <div className="header">Header</div>
    )
}

//Bài tập
function PostItem() {
    return (
        <div className="post-item">
            <img src="https://qc-static.coccoc.com/a-images/e32/d8b/e32d8be994259768a2511b5c9aaa1cd5f4b812708d4f9fc58224b20eb9f6e6ab.png" alt="image" />
            <h2 className="post-title">C#.NET - tương tác với file Excel</h2>
            <div className="post-desc">Bạn có kiến thức ngôn ngữ C#! Bạn muốn thực hiện tương tác với file Excel</div>
            <div className="post-pulished">Một ngày trước - 5 phút đọc</div>
        </div>
    )
}

//Class Component
class Content extends React.Component {
    render() {
        return (
            <div className="posts-list">
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        )
    }
}

const app = (
    <React.Fragment>
        <Header />
        <Content />
    </React.Fragment>
);
console.log(app);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(app);