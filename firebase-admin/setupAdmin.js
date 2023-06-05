const admin = require('firebase-admin');

const serviceAccount = require(process.env.FIREBASE_ADMIN_SDK);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const uid = process.env.FIREBASE_ADMIN_UID;

admin.auth().setCustomUserClaims(uid, {admin: true}).then(() => {
    console.log('Admin permissions set for user', uid);
    process.exit()
}).catch(error => console.error('Error setting admin permissions', error));
