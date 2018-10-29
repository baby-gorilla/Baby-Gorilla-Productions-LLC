import React from 'react'
import { Link } from 'gatsby'
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';
import Layout from '../components/layout'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB0aeYOvbepM0dU_E_YHJ9QvjioHvmR-Pg",
  authDomain: "baby-gorilla-productions.firebaseapp.com",
  databaseURL: "https://baby-gorilla-productions.firebaseio.com",
  projectId: "baby-gorilla-productions",
  storageBucket: "baby-gorilla-productions.appspot.com",
  messagingSenderId: "524908697400"
});
console.log(firebaseApp);

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
