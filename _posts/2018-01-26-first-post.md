---
title: "Kickstart_2019_RoundD_X or What?"
date: 2017-10-20 08:26:28 -0400
categories: jekyll update
---


#include <stdio.h>

#define MIN(a,b) (a>b?b:a)
bool checkXorEven(int number) {
	int count = 0;
	while (number) {
		number = number & (number - 1);
		count++;
	}
	if (count % 2==0) {
		return true;
	}
	else {
		return false;
	}

}

int main()
{
    int T, N, Q;
    scanf("%d", &T);
    for(int testcase=0; testcase<T; testcase++){
        scanf("%d %d",&N, &Q);

		bool A[100000];
        int result[100000];

        for(int i=0; i<N; i++){
			int tmp;
            scanf("%d", &tmp);
			A[i] = checkXorEven(tmp);
        }
        
        
       	int oddCount = 0;
		for (int i = 0; i < N; i++)
			if (!A[i])
				oddCount++; 
		int left,right;
		if (oddCount == 0){
		    left = -1;
		    right = -1;
		}
		else{
			for (int i = 0; i < N; i++)
				if (!A[i]) {
					left = i;
					break;
				}
			for (int i = N-1; i>=0; i--)
				if (!A[i]) {
					right = N - 1 - i;
					break;
				}		    
		}
        
        
		for (int i = 0; i < Q; i++) {
			int P, V;
			scanf("%d %d", &P, &V);
			
			bool newXor=checkXorEven(V);
			if(!A[P] && !newXor){}
			else if (!A[P] && newXor){
			    oddCount --;
			    if(oddCount == 0){
			        left = -1;
			        right = -1;
			    }
			    else{
			        if(P == left){
			            for (int i = P+1; i < N; i++)
				            if (!A[i]) {
					         left = i;
					         break;
				            }
		    	    }
		    	    if(P == N - 1 - right){
		    	    	for (int i = P-1; i>=0; i--)
				            if (!A[i]) {
					            right = N-1 - i;
				            	break;
				            }    
			        }
			    }
			}
			else if (A[P] && !newXor){
			    oddCount ++;
			    if(left == -1 || P < left){
			        left = P;
			    }
			    if(right == -1 || P > N - 1 - right){
			        right = N - 1 - P;
			    }
			}
			else if (A[P] && newXor){}
			    
			A[P] = newXor;
			
			
			if (oddCount % 2 == 0)
				result[i] = N;
			else if (oddCount == 1 && N == 1)
				result[i] = 0;
			else {
				result[i] = N - 1 - MIN(left, right);
			}
            
        }
		printf("Case #%d: ",testcase+1);
		for (int i = 0; i < Q; i++) {
			printf("%d ", result[i]);
		}
		printf("\n");
    }
}
