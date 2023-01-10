import Header from '../Header'
import './index.css'

const onChangeSearch = event => {
  const dictionary = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }
  const userInput = event.target.value;
  try {
    for i,j in dict_values.items():
    #print(i,j)
    if i==left:
        #print(j)
        left_actual = j
    if i==right:
        right_actual = j 
if operator == "times":
    print(left_actual* right_actual)
if operator == "plus":
    print(left_actual+ right_actual)
if operator == "minus":
    print(left_actual- right_actual)
if operator == "divided_by":
    print(left_actual//right_actual)
       
  }
  catch(err) {
    
    console.log(err);
  }
}
}

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <input
          className="e-input"
          type="text"
          placeholder="Enter your Input here"
          onBlur={onChangeSearch}
        />
        {/* <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="dresses to be noticed"
          className="home-mobile-img"
        /> */}
      </div>
      {/* <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="dresses to be noticed"
        className="home-desktop-img"
      /> */}
    </div>
  </>
)

export default Home
