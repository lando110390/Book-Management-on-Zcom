const BOOK_ABI = [{"constant":true,"inputs":[],"name":"provider","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isVersionContract","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_objectId","type":"bytes32"},{"name":"_fileNameHash","type":"bytes32"},{"name":"_dataHash","type":"bytes32"},{"name":"_bookId","type":"bytes32"}],"name":"setImgFile","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_bookId","type":"bytes32"}],"name":"getImgId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"bookIds","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getIdBookList","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isVersionLogic","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_bookId","type":"bytes32"}],"name":"getBookWithID","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_objectId","type":"bytes32"},{"name":"_param","type":"bytes32"}],"name":"getImgFile","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contractName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_bookId","type":"bytes32"}],"name":"setBookId","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"logic_v1","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_objectId","type":"bytes32"},{"name":"_hash","type":"bytes32"},{"name":"_bookId","type":"bytes32"}],"name":"updateTitleData","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isVersionContractOrLogic","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_bookId","type":"bytes32"}],"name":"getTitleId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_objectId","type":"bytes32"},{"name":"_fileHash","type":"bytes32"},{"name":"_bookId","type":"bytes32"}],"name":"updateImgFile","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sayHello","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLengthBooks","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_objectId","type":"bytes32"}],"name":"getTitleData","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cns","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getContractName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCns","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_objectId","type":"bytes32"},{"name":"_hash","type":"bytes32"},{"name":"_bookId","type":"bytes32"}],"name":"setTitleData","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_cns","type":"address"},{"name":"_logic_v1","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
