const reverseList = (head) => {
    let cur = head;
    let pre = null
    while (cur) {
        // const temp = cur.next
        // cur.next = pre
        // pre = cur;
        // cur = temp
        const temp = cur.next;
        // pre=cur.next;
        cur.next = pre
        pre = cur;
        cur = temp
    }
}

// 5 -> 1 - 2 > 3