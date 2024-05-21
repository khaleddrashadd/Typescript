// 

//////////////////////////////
//////////LINKED LIST////////
/////////////////////////////

class Nodee {
    data: any;
    next: any;
    constructor(data: any) {
        this.data = data;
        this.next = null;
    }

    push(data: any) {
        let current = this;
        while (current.next !== null) {
          console.log('current')
            current = current.next;
        }
        current.next = new Nodee(data);
    }


}

const node = new Nodee(1);
node.push(2);
node.push(2);
node.push(2);
console.log(node)