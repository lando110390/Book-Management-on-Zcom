var LOCAL_STORAGE = {};

var _bookAccountKey = 'medical-record.doctor';

LOCAL_STORAGE.getAccount = function () {
    var serializedAccount = localStorage.getItem(_bookAccountKey);
    return serializedAccount ? ethClient.Account.deserialize(serializedAccount) : null;
};
LOCAL_STORAGE.setAccount = function (_account) {
    localStorage.setItem(_bookAccountKey, _account.serialize());
};
