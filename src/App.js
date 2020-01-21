import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import jsPDF from 'jspdf';

class App extends Component{

  constructor(){
    super();
    this.state = {
      name:'',
      bookingdate:'',
      height:11.69,
      height:'08.27',
      title:'sample.pdf',
      deliverydate:'',
      totalamount:'',
      advance:'',
      balance:'',
      length:'',
      shoulder:'',
      tbreast:'',
      breast:'',
      waist:'',
      sleeve:'',
      collar:'',
      bottom:'',
      collortype:'',
      sleevetype:'',
      typeofcloth:''
    }
  }

  downloadPdf(e){
    e.preventDefault();
     
    var doc = new jsPDF()

    doc.setFontSize(40)
    doc.setFontType('bold')
    doc.text(20, 40, 'AL MANAR')

    doc.setLineWidth(0.5)
    doc.line(20, 45, 100, 45)

    doc.setFontSize(20)
    doc.setFont('courier')
    doc.setFontType('normal')
    doc.text(20, 55, 'Rafha')

    doc.setFontSize(20)
    doc.setFont('courier')
    doc.setFontType('normal')
    doc.text(20, 63, 'Saudi Arabia')

    doc.setFontSize(20)
    doc.setFont('courier')
    doc.setFontType('normal')
    doc.text(20, 71, 'phone:545024237')

    doc.setFontSize(20)
    doc.setFont('helvetica')
    doc.setFontType('BOLD')
    doc.text(20, 95, 'BILL TO :')

    doc.setLineWidth(0.5)
    doc.line(20, 98, 200, 98)

    doc.setFontSize(17)
    doc.setFont('helvetica')
    doc.setFontType('bold')
    doc.text(20, 110, 'Name:')
    doc.setFontType('normal')
    doc.text(40, 110, `${this.state.name}`)
    doc.setFontType('bold')
    doc.text(20, 125, 'Booking Date:')
    doc.setFontType('normal')
    doc.text(62, 125, `${this.state.bookingdate}`)
    doc.setFontType('bold')
    doc.text(20, 140, 'Delivery Date:')
    doc.setFontType('normal')
    doc.text(62, 140, `${this.state.deliverydate}`)

    



doc.setFontType('bold')
doc.text(130, 110, 'Total Amount:')
doc.setFontType('normal')
doc.text(172, 110, `${this.state.totalamount}`)
doc.setFontType('bold')
doc.text(130, 125, 'Advance:')
doc.setFontType('normal')
doc.text(159, 125, `${this.state.advance}`)

doc.setFontType('bold')
doc.text(130, 140, 'Balance:')
doc.setFontType('normal')
doc.text(159, 140, `${this.state.balance}`)

doc.setLineWidth(0.5)
doc.line(20, 150, 200, 150)


doc.setFontType('bold')
doc.text(20, 180, 'Length:')
doc.setFontType('normal')
doc.text(43, 180, `${this.state.length}`)

doc.setFontType('bold')
doc.text(20, 200, 'Shoulder:')
doc.setFontType('normal')
doc.text(50, 200, `${this.state.shoulder}`)

doc.setFontType('bold')
doc.text(20, 220, 'T.Breast:')
doc.setFontType('normal')
doc.text(47, 220, `${this.state.tbreast}`)

doc.setFontType('bold')
doc.text(20, 240, 'Breast:')
doc.setFontType('normal')
doc.text(44, 240, `${this.state.breast}`)

doc.setFontType('bold')
doc.text(20, 260, 'Waist:')
doc.setFontType('normal')
doc.text(40, 260, `${this.state.waist}`)

doc.setFontType('bold')
doc.text(130, 180, 'Sleeve:')
doc.setFontType('normal')
doc.text(153, 180, `${this.state.sleeve}`)

doc.setFontType('bold')
doc.text(130, 200, 'Collar:')
doc.setFontType('normal')
doc.text(150, 200, `${this.state.collar}`)

doc.setFontType('bold')
doc.text(130, 220, 'Bottom:')
doc.setFontType('normal')
doc.text(153, 220, `${this.state.bottom}`)

doc.setFontType('bold')
doc.text(130, 240, 'Collar Type:')
doc.setFontType('normal')
doc.text(167, 240, `${this.state.collortype}`)

doc.setFontType('bold')
doc.text(130, 260, 'Sleeve Type:')
doc.setFontType('normal')
doc.text(168, 260, `${this.state.sleevetype}`)

doc.setFontType('bold')
doc.text(20, 280, 'Type of Cloth:')
doc.setFontType('normal')
doc.text(62, 280, `${this.state.typeofcloth}`)



    doc.autoPrint();
    window.open(doc.output('bloburl','_blank'))
    doc.save(`${this.state.title}`)
  };

  render() {
    return (
      <div style={{margin:'20px', fontFamily:'Roboto'}}>

        <span style={{width:'100%'}}>
            <p>Enter Name:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="Full Name"
            onChange={(x)=>this.setState({title: x.target.value+'.pdf',name:x.target.value})} />
            </p>
        </span>
        <span style={{width:'100%'}}>
            <p>Booking Date:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="type the booking date here"
            onChange={(x)=>this.setState({bookingdate: x.target.value})} />
            </p>
        </span>
        
        <span style={{width:'100%'}}>
            <p>Delivery Date:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="type the Delivery date here"
            onChange={(x)=>this.setState({deliverydate: x.target.value})} />
            </p>
        </span>
        
        <span style={{width:'100%'}}>
            <p>Total Amount:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="type the Total amount"
            onChange={(x)=>this.setState({totalamount: x.target.value})} />
            </p>
        </span>
        
        <span style={{width:'100%'}}>
            <p>Advance:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="type the Balance amount"
            onChange={(x)=>this.setState({advance: x.target.value})} />
            </p>
          </span>
            
        <span style={{width:'100%'}}>
            <p>Balance:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="type the booking date"
            onChange={(x)=>this.setState({balance:this.state.totalamount - this.state.balance})} />
            </p>
        </span>

        
        <span style={{width:'100%'}}>
            <p>Length:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="type the length"
            onChange={(x)=>this.setState({length: x.target.value})} />
            </p>
          </span>
            
        <span style={{width:'100%'}}>
            <p>Shoulder Length:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="type the shoulder length"
            onChange={(x)=>this.setState({shoulder: x.target.value})} />
            </p>
        </span>
        
        <span style={{width:'100%'}}>
            <p>T.Breast:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="type the T breast length"
            onChange={(x)=>this.setState({tbreast: x.target.value})} />
            </p>
        </span>
        <span style={{width:'100%'}}>
            <p>Breast:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="type the breast length"
            onChange={(x)=>this.setState({breast: x.target.value})} />
            </p>
        </span>
        
        <span style={{width:'100%'}}>
            <p>Waist:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="type the waist length"
            onChange={(x)=>this.setState({waist: x.target.value})} />
            </p>
        </span>
        
        <span style={{width:'100%'}}>
            <p>Sleeve:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="type the booking date"
            onChange={(x)=>this.setState({sleeve: x.target.value})} />
            </p>
        </span>
        
        <span style={{width:'100%'}}>
            <p>Collar:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="type the booking date"
            onChange={(x)=>this.setState({collar: x.target.value})} />
            </p>
        </span>
        
        <span style={{width:'100%'}}>
            <p>Bottom:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="type the booking date"
            onChange={(x)=>this.setState({bottom: x.target.value})} />
            </p>
        </span>
        
        <span style={{width:'100%'}}>
            <p>Collar Typr:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="type the booking date"
            onChange={(x)=>this.setState({collortype: x.target.value})} />
            </p>
        </span>
        
        <span style={{width:'100%'}}>
            <p>Sleeve Type:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="type the booking date"
            onChange={(x)=>this.setState({sleevetype: x.target.value})} />
            </p>
        </span>

        
        <span style={{width:'100%'}}>
            <p>Type of cloth:
            <input type="text" size="30" style={{width:'100%'}}
            placeholder="type the booking date"
            onChange={(x)=>this.setState({typeofcloth: x.target.value})} />
            </p>
        </span>
        <center>
        <button onClick={this.downloadPdf.bind(this)}
        variant="raised" color="secondary" style={{margin:'5px'}}>
          Download PDF
        </button>
        </center>

        

      </div>
      
     
        )
      }

}
export default App;
