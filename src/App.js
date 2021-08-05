import Navbar from './components/Navbar';
import { useState } from 'react';
import AddPost from './components/AddPost';
import Post from './components/Post';
import { Scrollbars } from 'react-custom-scrollbars'
import PostCard from './components/PostCard'


function App() {

  const [posts, setposts] = useState([
    {
      id: 1,
      author: "user1",
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
      imgUrl: "https://picsum.photos/id/1/367/267",
    },
    {
      id: 2,
      author: "user3",
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      imgUrl: "https://picsum.photos/id/10/367/267",
    },
    {
      id: 3,
      author: "user1",
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      imgUrl: "https://picsum.photos/id/1000/367/267",
    },
    {
      id: 4,
      author: "user2",
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      imgUrl: "https://picsum.photos/id/1005/367/267",
    },
    {
      id: 5,
      author: "user1",
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      imgUrl:"https://picsum.photos/id/1011/367/267",
    },
    {
      id: 6,
      author: "user2",
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
      imgUrl: "https://picsum.photos/id/1024/367/267",
    },
    {
      id: 7,
      author: "user3",
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
      imgUrl: "https://picsum.photos/id/1025/367/267",
    },
    {
      id: 8,
      author: "user3",
      title: "dolorem dolore est ipsam",
      body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
      imgUrl: "https://picsum.photos/id/1019/367/267",
    },
    {
      id: 9,
      author: "user4",
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
      imgUrl: "https://picsum.photos/id/1010/367/267",
    },
    {
      id: 10,
      author: "user4",
      title: "optio molestias id quia eum",
      body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
      imgUrl: "https://picsum.photos/id/1003/367/267",
    },
  ])
  const [showAddPost, setShowAddPost] = useState(false)
  const [showPost, setshowPost] = useState(null)



  // post data
  const addNewPost = (post) => {
    console.log("post added")
    const id = Math.floor(Math.random() * 10000) + 1
    const newPost = {id, ...post}
    setposts([...posts, newPost])
  }

  // delete post
  const deletePost = (id) => {
    setposts(posts.filter((post) => post.id !== id))
  }

  const onClick = (post) => {
      setshowPost(post)
      setShowAddPost(false)
  }
  
  const onAdd = () => {
    setShowAddPost(!showAddPost)
    setshowPost(null)
  }
  return (
    <>
    <Navbar onAdd={onAdd} showAddPost={showAddPost}/>

      <div className="container-fluid row">           
            <div className={`${showPost || showAddPost ? "col-lg-7 col-md-4 d-sm-none d-md-block" : "col-lg-12"}`}>
                <Scrollbars style={{width: "100%", height: "90vh" }} >
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} onClick={onClick} />                    
                    ))}
                    </Scrollbars>
            </div>
                
            {showPost && <div className="col-lg-5 col-md-8 col-sm-12 post-row">
                <Post post={showPost} onDelete={deletePost} closePost={() => setshowPost(null)}/>
            </div>}     
            {showAddPost && <div className="col-lg-5 col-md-8 col-sm-12 post-row">
            <AddPost post={Post} onPost={addNewPost}/>
            </div>}      
        </div>
      <div className="footer">footer</div>
    </>
  );
}

export default App;
