pragma solidity ^0.4.17;

import '../../gmo/contracts/VersionLogic.sol';
import '../../gmo/contracts/DataObject_v1.sol';
import '../../gmo/contracts/FileObject_v1.sol';
import './BookContract.sol';
import './BookContract_v1.sol';

contract BookContractLogic_v1 is VersionLogic, BookContract {
    ContractNameService gmoCns;

    /* ----------- for migration ----------------- */
    function BookContractLogic_v1(ContractNameService _cns, ContractNameService _gmoCns) VersionLogic (_cns, CONTRACT_NAME) {
        gmoCns = _gmoCns;
    }

	function setTitleData(address _from,  bytes32 _objectId, bytes32 _dataHash) onlyByVersionContractOrLogic {
    	DataObject_v1 dataObject = DataObject_v1(gmoCns.getLatestContract('DataObject'));
        dataObject.create(_objectId, _from, _dataHash, cns, 'BookContract');

        bytes32 readerId = dataObject.getReaderId(_objectId);
        bytes32 writerId = dataObject.getWriterId(_objectId);
        AddressGroup_v1 group = AddressGroup_v1(gmoCns.getLatestContract('AddressGroup'));
        address[] memory account = new address[](1);
        account[0] = _from;
        group.addMembers(readerId, account);
        group.addMembers(writerId, account);

    }

    function updateTitleData(address _from, bytes32 _objectId, bytes32 _dataHash) onlyByVersionContractOrLogic {
        DataObject_v1 dataObject = DataObject_v1(gmoCns.getLatestContract('DataObject'));
        dataObject.setHashByWriter(_objectId, _from, _dataHash);
    }

    function setImgFile(address _from, bytes32 _fileNameHash, bytes32 _objectId, bytes32 _dataHash) onlyByVersionContractOrLogic {
    	FileObject_v1  fileObject = FileObject_v1 (gmoCns.getLatestContract('FileObject'));
        fileObject.create(_objectId, _from, _fileNameHash, _dataHash, cns, 'BookContract');

        bytes32 readerId = fileObject.getReaderId(_objectId);
        bytes32 writerId = fileObject.getWriterId(_objectId);
        AddressGroup_v1 group = AddressGroup_v1(gmoCns.getLatestContract('AddressGroup'));
        address[] memory account = new address[](1);
        account[0] = _from;
        group.addMembers(readerId, account);
        group.addMembers(writerId, account);
    }

	function getImgFile(bytes32 _objectId) constant returns (bytes32) {
        return _objectId;
    }

    function updateImgFile(address _from, bytes32 _objectId, bytes32 _fileHash) onlyByVersionContractOrLogic {
        FileObject_v1  fileObject = FileObject_v1 (gmoCns.getLatestContract('FileObject'));
        fileObject.setHashByWriter(_objectId, _from, _fileHash);
    }

}
