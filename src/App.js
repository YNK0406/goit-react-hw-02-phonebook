import React from "react";
import ContactForm from "./component/Contact/ContactForm";
import Section from "./component/Section/Section";
import ContactList from "./component/Contact/ContactList";
// import Filter from "./component/Section/Filter/Filter";

class App extends React.Component {
   state = {
      contacts: [
         {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
         {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
         {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
         {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: '',
      
      }
   handleFormSubmit = data=>{

   }
      render(){
         const{contacts}= this.state;
      return(
            <>
            <Section title='Phonebook'>
               <ContactForm onSubmit={this.handleFormSubmit}/>
            </Section>
            <Section title='Contact'>
               {/* <Filter/> */}
               <ContactList contacts={contacts}/>
            </Section>

            </>

      )
   }
}

export default App;
