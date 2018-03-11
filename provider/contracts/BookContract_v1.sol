pragma solidity ^0.4.17;
import '../../gmo/contracts/VersionContract.sol';
import './BookContract.sol';
import './BookContractLogic_v1.sol';

contract BookContract_v1 is VersionContract, BookContract  {
    BookContractLogic_v1 public logic_v1;

    mapping(address => bool) allowUsers;

    function BookContract_v1(ContractNameService _cns, BookContractLogic_v1 _logic_v1) VersionContract(_cns, CONTRACT_NAME) {
        logic_v1 = _logic_v1;
    }

	struct Book {
        bytes32 bookId;
        bytes32 titleId;
        bytes32 imgId;
    }

	mapping (bytes32 => Book) Books;
    bytes32[] public bookIds;

	function sayHello() constant returns (string) {
        return "Hello call - ok BookCtro";
    }

	// ***************************************************
	// ----------		BOOK ID		----------------------
	function setBookId(bytes _sign, bytes32 _bookId) {
        var book = Books[_bookId];
        book.bookId = _bookId;
        bookIds.push(_bookId)  -1;
    }

	function getBookWithID(bytes32 _bookId) view public returns (bytes32, bytes32, bytes32) {
        return (_bookId, Books[_bookId].titleId, Books[_bookId].imgId);
    }

    function getLengthBooks() view public returns (uint) {
        return bookIds.length;
    }

	function getIdBookList() view public returns (bytes32[]) {
        return bookIds;
    }

	// ***************************************************
	// ----------		BOOK TITLE		------------------
	function setTitleData(bytes _sign, bytes32 _objectId, bytes32 _hash, bytes32 _bookId) {
        // create all parameters hash
        bytes32 hash = calcEnvHash('setTitleData');
        hash = sha3(hash, _objectId);
        hash = sha3(hash, _hash);
        hash = sha3(hash, _bookId);

		var book = Books[_bookId];
        book.titleId = _objectId;

        address from = recoverAddress(hash, _sign);
        logic_v1.setTitleData(from, _objectId, _hash);
    }

	function getTitleId(bytes32 _bookId) constant returns(bytes32) {
        return Books[_bookId].titleId;
    }

    function getTitleData(bytes32 _objectId) constant returns(bytes32) {
        return _objectId;
    }

    function updateData(bytes _sign, bytes32 _objectId, bytes32 _hash, bytes32 _bookId) {
        bytes32 hash = calcEnvHash('updateTitleData');
        hash = sha3(hash, _objectId);
        hash = sha3(hash, _hash);
        hash = sha3(hash, _bookId);

        address from = recoverAddress(hash, _sign);
        logic_v1.updateTitleData(from, _objectId, _hash);
    }

	// ***************************************************
	// ----------		BOOK IMG		------------------
    function setImgFile(bytes _sign, bytes32 _objectId, bytes32 _fileNameHash, bytes32 _dataHash, bytes32 _bookId) {
        // create all parameters hash
        bytes32 hash = calcEnvHash('setImgFile');
        hash = sha3(hash, _objectId);
        hash = sha3(hash, _fileNameHash);
        hash = sha3(hash, _dataHash);
        hash = sha3(hash, _bookId);

		var book = Books[_bookId];
        book.imgId = _objectId;

        address from = recoverAddress(hash, _sign);
        logic_v1.setImgFile(from, _fileNameHash, _objectId, _dataHash);
    }

	function getImgId(bytes32 _bookId) constant returns(bytes32) {
        return Books[_bookId].imgId;
    }

	function getImgFile(bytes32 _objectId) constant returns (bytes32) {
        return logic_v1.getImgFile(bytes32(_objectId));
    }

    function updateImgFile(bytes _sign, bytes32 _objectId, bytes32 _fileHash) {
        bytes32 hash = calcEnvHash('updateImgFile');
        hash = sha3(hash, _objectId);
        hash = sha3(hash, _fileHash);
        hash = sha3(hash, _bookId);

        address from = recoverAddress(hash, _sign);
        logic_v1.updateImgFile(from, _objectId, _fileHash);
    }

}
