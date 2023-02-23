var swapPairs = function(head) {
   
    if(!head||!head.next){
        return head;
    }
    let newhead=head.next;
    head.next=swapPairs(newhead.next);
    newhead.next=head;
 return newhead
 
};