// import React from 'react';
// import '../styles/pages.css';

// // Class-based component demonstrating React lifecycle methods
// class Packages extends React.Component {
//   constructor(props) {
//     super(props);
//     // Component state holds packages list and loading flags
//     this.state = {
//       isLoading: false,
//       error: null,
//       packages: []
//     };
//   }

//   componentDidMount() {
//     // Lifecycle: called after component mounts
//     // Simulate fetching travel packages from API
//     this.setState({ isLoading: true });
//     this._timer = setTimeout(() => {
//       try {
//         const data = [
//           { id: 1, name: 'Bali Paradise Getaway', price: '₹114,560' },
//           { id: 2, name: 'Swiss Alps Adventure', price: '₹167,475' },
//           { id: 3, name: 'Tokyo Urban Explorer', price: '₹141,018' }
//         ];
//         this.setState({ packages: data, isLoading: false });
//       } catch (e) {
//         this.setState({ error: 'Failed to load packages', isLoading: false });
//       }
//     }, 600);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // Lifecycle: runs after updates; here as an illustrative example
//     if (prevState.packages.length !== this.state.packages.length) {
//       // Example side-effect: could log analytics or update document title
//       // Keeping it simple and relevant to topic
//       // console.log('Packages updated');
//     }
//   }

//   componentWillUnmount() {
//     // Cleanup any async timers/listeners
//     if (this._timer) clearTimeout(this._timer);
//   }

//   render() {
//     const { isLoading, error, packages } = this.state;
//     if (isLoading) return <div style={{ padding: 16 }}>Loading packages...</div>;
//     if (error) return <div style={{ padding: 16, color: 'red' }}>{error}</div>;

//     return (
//       <div className="page packages-page">
//         <h2>Packages</h2>
//         <p>Handpicked travel packages ready to book</p>
//         <ul>
//           {packages.map(p => (
//             <li key={p.id}>{p.name} — {p.price}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Packages;


