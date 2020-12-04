from django.db import models as m

class User(m.Model):
    STATUS = (
        (1, 'New'),
        (2, 'Verified'),
        (9, 'Depreciated'),
    )
    user_id = m.CharField(verbose_name='用户ID', max_length=256, primary_key=True, unique=True)
    username = m.CharField(verbose_name='用户名',max_length=20)
    password = m.CharField(verbose_name='密码', max_length=48)

    status = m.IntegerField(verbose_name='状态', choices=STATUS)

    phone = m.CharField(max_length=11,unique=True,verbose_name='手机号')
    balance = m.FloatField(verbose_name='余额',default=0,null=True)
    address = m.CharField(verbose_name='地址', max_length=200)
    create_time = m.DateTimeField(verbose_name='创建时间', auto_now_add=True)
    update_time = m.DateTimeField(verbose_name='修改时间', auto_now=True)

    def __str__(self):
        return self.username