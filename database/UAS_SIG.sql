PGDMP  -                    |            UAS_SIG    16.3    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    21706    UAS_SIG    DATABASE     �   CREATE DATABASE "UAS_SIG" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE "UAS_SIG";
                postgres    false            �            1259    21707    tblminimarket    TABLE     �   CREATE TABLE public.tblminimarket (
    id integer NOT NULL,
    nama character varying(100),
    latitude double precision,
    longitude double precision
);
 !   DROP TABLE public.tblminimarket;
       public         heap    postgres    false            �          0    21707    tblminimarket 
   TABLE DATA           F   COPY public.tblminimarket (id, nama, latitude, longitude) FROM stdin;
    public          postgres    false    215   �       P           2606    21711    tblminimarket minimarket_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.tblminimarket
    ADD CONSTRAINT minimarket_pkey PRIMARY KEY (id);
 G   ALTER TABLE ONLY public.tblminimarket DROP CONSTRAINT minimarket_pkey;
       public            postgres    false    215            �   Q  x�}��N�0E��W��<���� *���6�B�r���	5���✹�0d}1tΗ#����nK?ut������+�b�m,<-JIx���Wnt}I��Lj+5'"AC�"��y9��mh�ctG�8H01�\�z��	S�������|�Wu�L~�[�ʂZp-,�	�����X�9�t+
��q��d��K�Ə������e�kS�gbO�y�8��F`'e75]o�qΘ�I���yaQR*��
������݅Aڲ��S�P�`�  �R���"h.b� � �����6fhe0:�b8 ��3l`���?l�%'�+B����     