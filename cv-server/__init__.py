import cv2

face_cascade = cv2.CascadeClassifier('./classifiers/haarcascade_frontalface_default.xml')
eye_cascade = cv2.CascadeClassifier('./classifiers/haarcascade_eye.xml')
cam = cv2.VideoCapture('tcp://192.168.1.1:5555')
# cam = cv2.VideoCapture(0)
running = True
while running:
    # get current frame of video
    running, img = cam.read()
    if running:
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, 1.3, 5)
        for (x,y,w,h) in faces:
            cv2.rectangle(img,(x,y),(x+w,y+h),(255,0,0),2)
            roi_gray = gray[y:y+h, x:x+w]
            roi_color = img[y:y+h, x:x+w]
            eyes = eye_cascade.detectMultiScale(roi_gray)
            for (ex,ey,ew,eh) in eyes:
                cv2.rectangle(roi_color,(ex,ey),(ex+ew,ey+eh),(0,255,0),2)
        cv2.imshow('frame', img)
        if cv2.waitKey(1) & 0xFF == 27:
            running = False
    else:
        # error reading frame
        print ('error reading video feed')



cam.release()
cv2.destroyAllWindows()



def detectObject(frame):



    pass
