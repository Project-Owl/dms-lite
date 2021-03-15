FROM python:3

ADD serial_sqlwriter.py /

RUN pip install pyserial

CMD [ "python", "./serial_sqlwriter.py" ]