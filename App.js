import Modal from '@material-ui/core/Modal';
import React, {useState} from 'react' ;
import './App.css';
import Post from './Post';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import ZuragOruulah from './ZuragOruulah';
import InputBase from '@material-ui/core/InputBase';
import axios from './axios'
import FlipMove from 'react-flip-move';


function getModalStyle(){
  const top = 50;
  const left = 50; 

  return{
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),

    search: {
        backgroundColor: '#B6B6B4',
        position: 'relative',
        
        border: '1px solid #000',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
    
    },
  }));
function App() {

  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
  const [posts, setPosts] = useState([
    {
      username: "Adiya-Ochir",
      caption: "Lab07", 
      ImageUrl: "https://assets.entrepreneur.com/content/3x2/2000/20170720143824-image-search-phone.jpeg?width=700&crop=2:1"
    },
    {
      username: "User", 
      caption: "Write a caption...", 
      ImageUrl: "https://analyticsindiamag.com/wp-content/uploads/2019/07/image_rec_lib_banner.jpg"
    },
    {
      username: "User", 
      caption: "Write a caption...", 
      ImageUrl: "https://microscopy.org.au/wp-content/uploads/2019/11/Life-Sceinces-1st-Prize-V.-Pragathi-Masamsetti-Children_s-Medical-Research-Institute.jpg"
    },
    {
      username: "User", 
      caption: "Write a caption...", 
      ImageUrl: "https://www.slazzer.com/static/images/demo/ecommerce-image-upload.jpg"
    },
  ]);

  const fetchPosts = async () => 
  await axios.get('/sync').then(response => {
    console.log(response);
    setPosts(response.data)
  });


  console.log('posts are >>>', posts);
  

  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);
  const [openSignIn, setOpenSignIn] = useState(false);

  const signUp = (event) => {
    event.preventDefault();
    
  }

  return (
    <div className="App">

      <Modal
        open = {open}
        onClose = {() => setOpen(false)}
        >
          <div style = {modalStyle} className = {classes.paper}>
            <form className = "newtreh">
                <center>
                  <img
                        className="instagram_logo"
                        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        alt=""
                      />
                </center> 
                      <Input placeholder = 'Username' type = 'text' value = {username} onChange = {(e) => setUsername(e.target.value)}/>
                      <Input placeholder = 'Email' type = 'text' value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                      <Input placeholder = 'Password' type = 'password' value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                      <Button type = "submit" onClick = {signUp}>Sign Up</Button>
            </form>
          </div>
      </Modal>

      <Modal open = {openSignIn} onClose = {() => setOpenSignIn(false)}>
          <div style = {modalStyle} className = {classes.paper}>
            <form className = "newtreh">
                <center>
                  <img
                        className="instagram_logo"
                        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        alt=""
                      />
                </center> 
                      <Input 
                        placeholder = 'Email'
                        type = 'text'
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                      />
                      <Input 
                        placeholder = 'Password'
                        type = 'password'
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                      />
                      <Button type = "submit" onClick = {signUp}>Sign In</Button>
            </form>
          </div>
      </Modal>


      <div className = "tolgoi">
            <img
                className="instagram_logo"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              />
              <div className={classes.search}>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'Search' }}
                  />
              </div>
              <div className = "app_loginContainer">
                <Button onClick = {() => setOpen(true)}>Sign Up</Button>
                <Button onClick = {() => setOpenSignIn(true)}>Sign In</Button>
              </div>
      </div>
      <div className = "post">
        <div className = "postZvvn">
          <FlipMove>
                {posts.map((post) => (
                  <Post 
                  user = {user}
                  key = {post._id}
                  username = {post.username} 
                  caption = {post.caption} 
                  ImageUrl = {post.ImageUrl}/>
                ))
              }
          </FlipMove>
          </div>
      </div>
        <ZuragOruulah />
      </div>
  );
}

export default App;
