import Input from "../../components/Input";
import "./Price.css"

function Price({handleChange}){

          return <div className="ml">
            <h2 className="sidebar-title price-title">Price</h2>

           
            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="" name="test2" />
                <span className="checkmark"></span>All
              </label>

              <Input
              handleChange={handleChange}
              value={4400}
              title='Rs.4400 - Rs.15000'
              name="test2"
               />

              <Input
              handleChange={handleChange}
              value={15700}
              title='Rs.15700 - Rs.18800'
              name="test2"
               />

              <Input
              handleChange={handleChange}
              value={10000}
              title='Rs.18800 - Rs.19990'
              name="test2"
               />

              <Input
              handleChange={handleChange}
              value={19990}
              title='Over Rs.25,000'
              name="test2"
               />
            
          </div>
        }
        
        export default Price;