import React from "react";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import { getDoc, doc, updateDoc, setDoc } from "@firebase/firestore";
import { useContext } from "react";
import { langContext } from "../../contexts/langContext";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { useRef } from "react";
import { getAuth, signInWithEmailAndPassword, updateEmail, updateCurrentUser, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "@firebase/auth";
// import { User } from "@firebase/auth";
// import { firebase } from '@firebase'
import { useHistory } from "react-router-dom";
import Dialog from "../dialog";
import './account.css'
import { async } from "@firebase/util";
// import { setDefaultEventParameters } from "firebase/analytics";

function Account(props) {
    const { lang, setlang } = useContext(langContext);

    const [userInfo, setUserInfo] = useState({});

    const userID = localStorage.getItem("UID");

    const history = useHistory();

    const [showTaskDialog, setShowTaskDialog] = useState(false);
    const [updateInfo, setUpdateInfo] = useState(false);
    const [username, setUsername] = useState();
    const [useremail, setUseremail] = useState();
    const [password, setPassword] = useState();
    const auth = getAuth()
    useEffect(() => {
        getAuth();
        const docRef = doc(firestore, `users/${userID}`);
        getDoc(docRef).then((res) => {
            setUserInfo(res.data());
            console.log(userID)
            console.log(res.data())
        });

    }, []);


    const confirm = () => {
        localStorage.removeItem("UID")
        history.replace("/login");
        console.log("Hello")
    }

    const cancel = () => {
        console.log('canceledd');
        setShowTaskDialog(false)
    }
    function signOut() {
        localStorage.removeItem("UID")
        history.replace("/login");
        console.log("Hello")
    }
    const editInfo = async (e) => {
        e.preventDefault()

        if (useremail === undefined || password === undefined || username === undefined) {
            alert("You Have to Fill All Fields!")
        }

        const docReff = doc(firestore, `users/${userID}`);
        getDoc(docReff).then((res) => {
            signInWithEmailAndPassword(auth, res.data()['useremail'], res.data()['password']).then((cred) => {
                updateEmail(cred.user, useremail).then(() => {

                    updatePassword(cred.user, password).then(() => {

                        const docRef = doc(firestore, `users/${userID}`);
                        updateDoc(docRef, { password: password, useremail: useremail, username: username })
                            .then((res) => {

                                alert("Changed successfully!")
                                window.location.reload();

                            })
                    })
                })

            })
        })

    }

    return (
        <>


            <div class="container" style={{ width: '77%' }}>
                <div class="row">


                    < div class="col-md-12 d-flex flex-column" >
                        <div class="border" style={{ backgroundColor: 'white', height: '100%' }}>
                            <div class='container' style={{ display: 'flex', justifyContent: 'space-between' }}>

                                <h5
                                    style={{
                                        textAlign: "start",
                                        paddingLeft: "10px",
                                        width: "80%",
                                        paddingBottom: "10px",
                                        paddingTop: '10px'
                                    }}
                                    class="border-bottom"
                                >
                                    {" "}
                                    {lang == "en" ? "Account Overview" : "نظرة عامة حول الحساب"}
                                </h5>
                                <div style={{

                                    padding: "10px",
                                    width: "20%",
                                    fontWeight: '600',

                                    paddingTop: '10px'
                                }}
                                > <span class="hoverText p-2" style={{cursor:"pointer"}} onClick={() => { setShowTaskDialog(true) }}>{lang == "en" ? "Sign Out" : "تسجيل الخروج "}{" "} </span>
                                    <Dialog show={showTaskDialog}
                                        confirm={confirm}
                                        cancel={cancel}
                                        title="Sign Out?"
                                        description="Are you sure you want to sign out?" /> </div>

                            </div>
                            <div class=" container" style={{ padding: '15px' }}>

                                <div class='d-flex row' style={{ padding: '15px', justifyContent: 'space-between' }} >
                                    <div class='col-md-6'

                                        style={{
                                            border: "solid 2px #f0f0f0",

                                            height: "240px",
                                            borderRadius: "3px",
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontSize: ".875rem",
                                                fontWeight: "500",
                                                textAlign: "start",
                                                paddingLeft: "10px",
                                                width: "100%",
                                                paddingBottom: "15px",
                                                paddingTop: "15px",
                                            }}
                                            class="border-bottom"
                                        >

                                            {lang == "en" ? "ACCOUNT DETAILS" : "تفاصيل الحساب "}{" "}
                                        </p>
                                        {updateInfo === false && <div>
                                            <p>
                                                <p style={{ color: 'gray', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px', marginBottom: '3px' }}> <span style={{ fontWeight: '600' }}> Username : </span>{userInfo.username}  </p>
                                                <p style={{ color: 'gray', paddingLeft: '10px', paddingRight: '10px', marginBottom: '3px' }}> <span style={{ fontWeight: '600' }}> Email : </span> {userInfo.useremail}  </p>
                                                <p style={{ color: 'gray', paddingLeft: '10px', paddingRight: '10px' }}> <span style={{ fontWeight: '600' }}> Password : </span> ******** </p>
                                            </p>
                                            <div >  <button class="hoverButton" onClick={() => { setUpdateInfo(true) }}>                   {" "}
                                                {lang == "en" ? "CHANGE DETAILS " : " تعديل "}{" "} </button> </div>

                                        </div>}

                                        {updateInfo === true && <div>
                                            <form onSubmit={editInfo}>
                                                <div>
                                                    <p>
                                                        <p style={{ color: 'gray', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px', marginBottom: '3px' }}> <span style={{ fontWeight: '600' }}> Username : </span><input id='username'
                                                            type="text"
                                                            value={username}
                                                            placeholder="username"
                                                            onChange={(e) => setUsername(e.target.value)}
                                                            style={{
                                                                border: 'none',
                                                                borderBottom: '2px solid gray'
                                                            }} />  </p>
                                                        <p style={{ color: 'gray', paddingLeft: '10px', paddingRight: '10px', marginBottom: '3px' }}> <span style={{ fontWeight: '600' }}> Email : </span> <input id='useremail'
                                                            type="text"
                                                            value={useremail}
                                                            placeholder="useremail"
                                                            onChange={(e) => setUseremail(e.target.value)}
                                                            style={{
                                                                border: 'none',
                                                                borderBottom: '2px solid gray'
                                                            }} />  </p>
                                                        <p style={{ color: 'gray', paddingLeft: '10px', paddingRight: '10px' }}> <span style={{ fontWeight: '600' }}> Password : </span><input id='password'
                                                            type="text"
                                                            value={password}
                                                            placeholder="password"
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            style={{
                                                                border: 'none',
                                                                borderBottom: '2px solid gray'
                                                            }} /> </p>
                                                    </p>
                                                    <div >  <button style={{ backgroundColor: '#f68b1e', color: 'white', width: '150px', padding: '7px', border: 'none', borderRadius: '5px', marginLeft: '8px', marginRight: '8px' }} type='submit'> UPDATE</button> </div>

                                                </div>


                                            </form>
                                        </div>}
                                    </div>

                                    <div class='col-md-6'
                                        style={{
                                            border: "solid 2px #f0f0f0",
                                            // width: "49%",
                                            height: "240px",
                                            borderRadius: "3px",
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontSize: ".875rem",
                                                fontWeight: "500",
                                                textAlign: "start",
                                                paddingLeft: "10px",
                                                width: "100%",
                                                paddingBottom: "15px",
                                                paddingTop: "15px",
                                            }}
                                            class="border-bottom"
                                        >
                                            {" "}
                                            {lang == "en" ? "ADDRESS BOOK" : "جهات الاتصال "}{" "}
                                        </p>
                                        <div style={{ display: "flex", paddingLeft: "12px" }}>
                                            <div style={{ fontWeight: "500" }}>
                                                {lang == "en" ? "Your default shipping address:" : "العنوان الافتراضي للشحن:"}{" "}
                                            </div>

                                        </div>
                                        <div style={{ padding: "12px" }}>
                                            N/A
                                        </div>







                                    </div>
                                </div>
                            </div>








                            <div class=" container" style={{ padding: '15px' }}>

                                <div class='d-flex row' style={{ padding: '15px', justifyContent: 'space-between' }} >
                                    <div class='col-md-6'

                                        style={{
                                            border: "solid 2px #f0f0f0",
                                            // width: "49%",
                                            height: "240px",
                                            borderRadius: "3px",
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontSize: ".875rem",
                                                fontWeight: "500",
                                                textAlign: "start",
                                                paddingLeft: "10px",
                                                width: "100%",
                                                paddingBottom: "15px",
                                                paddingTop: "15px",
                                            }}
                                            class="border-bottom"
                                        >

                                            {" "}
                                            {lang == "en" ? "JUMIA PRIMO" : "JUMIA PRIMO"}{" "}
                                        </p>
                                        <div>
                                            <p class="ps-1" style={{ color: 'gray', fontSize: '.875rem', paddingLeft: '8px' }}>{" "}
                                                {lang == "en" ? "Jumia Primo is a loyalty program which offers members free delivery on all Jumia Items (excluding Jumia Global) and Jumia Food orders, plus exclusive access to promotions & deals." : "تعتبر Jumia Primo و Jumia Primo Plus برامج ولاء تتيح لأعضائها الاستفادة من التوصيل المجاني لطلبات Jumia Express و Jumia Food والوصول الحصري إلى العروض الترويجية بالإضافة إلى المكافآت والشراكات."}{" "}</p>

                                        </div>


                                    </div>

                                    <div class='col-md-6'
                                        style={{
                                            border: "solid 2px #f0f0f0",
                                            // width: "49%",
                                            height: "240px",
                                            borderRadius: "3px",
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontSize: ".875rem",
                                                fontWeight: "500",
                                                textAlign: "start",
                                                paddingLeft: "10px",
                                                width: "100%",
                                                paddingBottom: "15px",
                                                paddingTop: "15px",
                                            }}
                                            class="border-bottom"
                                        >
                                            {" "}
                                            {lang == "en" ? "JUMIA STORE CREDIT" : "رصيد حساب جوميا"}{" "}
                                        </p>

                                        <div style={{ padding: "7px" }}>
                                            <div style={{ fontWeight: "600", color: '#264996' }}>

                                                <span style={{ color: '#264996', paddingLeft: '8px', paddingRight: '8px' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
                                                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z" />
                                                        <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z" />
                                                    </svg></span>
                                                {lang == "en" ? "EGP 0.00" : "0.00 جنيه"}{" "}
                                            </div>
                                        </div>







                                    </div>
                                </div>
                            </div>










                        </div>

                    </div >
                </div >


                <div>


                </div>

            </div >


        </>
    )
}
export default Account;