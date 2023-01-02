function getParticipants(handshakes){
    let n = 0;
     while(handshakes > (n*(n-1)/2)) n++;
     return n;
   }