import React, {Component} from 'react';

class Search extends Component {
    constructor(){
        super()

        this.state={
            names: ['Liam', 'Noah', 'William', 'James', 'Logan', 'Benjamin', 'Mason', 'Elijah', 'Oliver', 'Jacob', 'Lucas', 'Michael', 'Alexander', 'Ethan', 'Daniel', 'Matthew', 'Aiden', 'Henry', 'Joseph', 'Jackson', 'Samuel', 'Sebastian', 'David', 'Carter', 'Wyatt', 'Jayden', 'John', 'Owen', 'Dylan', 'Luke', 'Gabriel', 'Anthony', 'Isaac', 'Grayson', 'Jack', 'Julian', 'Levi', 'Christopher', 'Joshua', 'Andrew', 'Lincoln', 'Mateo', 'Ryan', 'Jaxon', 'Nathan', 'Aaron', 'Isaiah', 'Thomas', 'Charles', 'Caleb', 'Josiah', 'Christian', 'Hunter', 'Eli', 'Jonathan', 'Connor', 'Landon', 'Adrian', 'Asher', 'Cameron', 'Leo', 'Theodore', 'Jeremiah', 'Hudson', 'Robert', 'Easton', 'Nolan', 'Nicholas', 'Ezra', 'Colton', 'Angel', 'Brayden', 'Jordan','Dominic', 'Austin', 'Ian', 'Sara', 'Joe', 'Elliot', 'Ivan', 'Rowan', 'Molly'],
            filteredNames: [],
            searchTerm: '',
        }

    }
    
    updateSearch(text){
        this.setState({
            searchTerm: text,
        })
    }

    render(){
        
        let filteredTiles = this.state.names.filter((name)=>{
            const {searchTerm}=this.state
            let searchLen = searchTerm.length
            if(searchTerm.toUpperCase()===name.slice(0, searchLen).toUpperCase()){
                return name
            }
        })
        
        let nameTiles = filteredTiles.map((el, i)=>{
            return (
                <div key={i}>
                    <h3>{el}</h3>
                </div>
            )
        })

        
       
        return(
            <div>
                <input onChange={(e)=>this.updateSearch(e.target.value)} />
                {nameTiles}
            </div>
        )
    }
}

export default Search